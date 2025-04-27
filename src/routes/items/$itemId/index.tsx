import { useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";

import { createFileRoute } from "@tanstack/react-router";
import { Formik, Form } from "formik";

import * as yup from "yup";

import SearchIcon from "@mui/icons-material/Search";
import ImageCarousel from "../../../components/ImageCarousel";
import { MuiField } from "../../../components/MuiField";

export const Route = createFileRoute("/items/$itemId/")({
  component: RouteComponent,
});

export type OptionType = {
  id: number;
  name: string;
  moq: number;
  price: number;
  weight: number;
  description: string;
  images: string[];
};

const options: OptionType[] = [
  {
    id: 1001,
    name: "2-Slice Pop-Up Toaster",
    moq: 1000,
    price: 100,
    weight: 10,
    description:
      "Compact toaster with adjustable browning settings and a crumb tray.",
    images: [
      "https://picsum.photos/id/1/200",
      "https://picsum.photos/id/2/200",
      "https://picsum.photos/id/3/200",
      "https://picsum.photos/id/4/200",
    ],
  },
  {
    id: 1002,
    name: "4-Slice Stainless Steel Toaster",
    moq: 100,
    price: 10,
    weight: 1,
    description:
      "A family-sized toaster with extra-wide slots and a sleek brushed steel finish.",
    images: [
      "https://picsum.photos/id/1/200",
      "https://picsum.photos/id/2/200",
      "https://picsum.photos/id/3/200",
      "https://picsum.photos/id/4/200",
    ],
  },
  {
    id: 1003,
    name: "Countertop Convection Oven",
    moq: 2000,
    price: 100,
    weight: 10,
    description:
      "Versatile mini oven with convection cooking, ideal for baking and roasting.",
    images: [
      "https://picsum.photos/id/1/200",
      "https://picsum.photos/id/2/200",
      "https://picsum.photos/id/3/200",
      "https://picsum.photos/id/4/200",
    ],
  },
  {
    id: 1004,
    name: "Air Fryer Toaster Oven Combo",
    moq: 3000,
    price: 200,
    weight: 15,
    description:
      "All-in-one appliance for air frying, baking, and toasting with digital controls.",
    images: [
      "https://picsum.photos/id/1/200",
      "https://picsum.photos/id/2/200",
      "https://picsum.photos/id/3/200",
      "https://picsum.photos/id/4/200",
    ],
  },
  {
    id: 1005,
    name: "Retro 2-Slice Toaster",
    moq: 2000,
    price: 200,
    weight: 20,
    description:
      "Stylish retro design with modern features like defrost and reheat modes.",
    images: [
      "https://picsum.photos/id/1/200",
      "https://picsum.photos/id/2/200",
      "https://picsum.photos/id/3/200",
      "https://picsum.photos/id/4/200",
    ],
  },
];

const filterOptionsSchema = yup.object().shape({
  minMoq: yup.number().min(0, "Must be greater then 0"),
  maxMoq: yup.number().min(0, "Must be greater then 0").nullable(),
  minPrice: yup.number().min(0, "Must be greater then 0"),
  maxPrice: yup.number().min(0, "Must be greater then 0").nullable(),
  minWeight: yup.number().min(0, "Must be greater then 0"),
  maxWeight: yup.number().min(0, "Must be greater then 0").nullable(),
});

const filterFields: {
  name: keyof yup.InferType<typeof filterOptionsSchema>;
  label: string;
}[] = [
  {
    name: "minMoq",
    label: "Min Moq",
  },
  {
    name: "maxMoq",
    label: "Max Moq",
  },
  {
    name: "minPrice",
    label: "Min Price",
  },
  {
    name: "maxPrice",
    label: "Max Price",
  },
  {
    name: "minWeight",
    label: "Min Weight",
  },
  {
    name: "maxWeight",
    label: "Max Weight",
  },
];

function RouteComponent() {
  const [displayedOptions, setDisplayedOptions] = useState<OptionType[]>([
    ...options,
  ]);
  const { itemId } = Route.useParams();

  return (
    <Container className="flex flex-col justify-center gap-4">
      <div className="flex justify-center items-end gap-1">
        <SearchIcon />
        <TextField
          label="Find option"
          variant="standard"
          id="input-with-icon-adornment"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDisplayedOptions(
              ...[
                options.filter((option) =>
                  option.name
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase())
                ),
              ]
            );
          }}
        />
      </div>
      <Container className="flex gap-2">
        <Formik
          initialValues={
            {
              minMoq: 0,
              maxMoq: null,
              minPrice: 0,
              maxPrice: null,
              minWeight: 0,
              maxWeight: null,
            } as yup.InferType<typeof filterOptionsSchema>
          }
          validationSchema={filterOptionsSchema}
          onSubmit={({ minMoq }) => {
            if (minMoq !== undefined)
              setDisplayedOptions(options.filter((x) => x.moq >= minMoq));
          }}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form className="flex flex-col gap-4">
              <Typography variant="h6">Filter:</Typography>

              {filterFields.map((x) => (
                <MuiField
                  key={x.name}
                  name={x.name}
                  label={x.label}
                  type="number"
                  value={values[x.name] === null ? "" : values[x.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              ))}

              <Button type="submit">Find</Button>
            </Form>
          )}
        </Formik>

        <Container
          className="
            grid
            grid-cols-1 lg:grid-cols-3
            gap-4"
        >
          {displayedOptions.map((option) => (
            <ImageCarousel
              key={option.id}
              route="/items/$itemId/options/$optionId"
              routeParams={{
                itemId: String(itemId),
                optionId: String(option.id),
              }}
              header={option.name}
              images={option.images}
            />
          ))}
        </Container>
      </Container>
    </Container>
  );
}
