"use client";

import { BookContext } from "@/context/BookContext";
import { Book } from "@/types/books";
import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  BarShapeProps,
  CartesianGrid,
  Label,
  LabelList,
  LabelProps,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}
  C${x + width / 3},${y + height}
  ${x + width / 2},${y + height / 3}
  ${x + width / 2},${y}
  C${x + width / 2},${y + height / 3}
  ${x + (2 * width) / 3},${y + height}
  ${x + width},${y + height}
  Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];

  return <Label {...props} fill={fill} />;
};

const ReadBooksChart = () => {
  const { readBooks }= useContext(BookContext);

  const data = readBooks.map((book: Book) => {
    return {
      name: book.bookName,
      uv: book.totalPages,
      pv: book.review,
      amt: book.rating,
    };
  });

  return (
    <div className="w-full overflow-x-auto">
      {readBooks.length > 0 ? (
        <div className="min-w-125 w-full">
          <BarChart
            style={{
              width: "100%",
              height: "clamp(300px, 50vw, 500px)",
            }}
            responsive
            data={data}
            margin={{
              top: 30,
              right: 15,
              left: 0,
              bottom: 50,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <Tooltip cursor={{ fillOpacity: 0.5 }} />

            <XAxis
              dataKey="name"
              interval={0}
              angle={-35}
              textAnchor="end"
              height={80}
              tick={{ fontSize: 12 }}
            />

            <YAxis width={45} tick={{ fontSize: 12 }} />

            <Bar dataKey="uv" shape={TriangleBar} activeBar>
              <LabelList content={CustomColorLabel} position="top" />
            </Bar>
          </BarChart>
        </div>
      ) : (
        <p className="mt-4 text-center text-gray-500">No books read yet.</p>
      )}
    </div>
  );
};

export default ReadBooksChart;
