import React, { useEffect } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import cn from "@/utils/classNames";
import moment from "moment";

export interface TodayPicksProps {
  fixture_time: string;
  league_name: string;
  fixture_name: string;
  predicted_advice: string;
  predicted_home_score_odd: number;
}

const columnHelper = createColumnHelper<TodayPicksProps>();

export interface TodayTableProps {
  tableData: TodayPicksProps[];
  tableHeadColor?: string;
}
const TodayPicksTable: React.FunctionComponent<TodayTableProps> = ({
  tableData,
  tableHeadColor = "bg-[#0E1746]",
}) => {
  const columns = [
    columnHelper.accessor((row) => row.fixture_time, {
      header: "Time",
      cell: (info) => moment(info.renderValue()).format("LT"),
    }),
    columnHelper.accessor((row) => row.league_name, {
      header: "Competition",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor((row) => row.fixture_name, {
      header: "Fixture",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor((row) => row.predicted_advice, {
      header: "Tip",
      cell: (info) => info.renderValue(),
    }),
    // columnHelper.accessor((row) => row.predicted_home_score_odd, {
    //   header: "Odds",
    //   cell: (info) => info.renderValue(),
    // }),
  ];
  const router = useRouter();
  const [data, setData] = React.useState(() => [...tableData]);
  const rerender = React.useReducer(() => ({}), {})[1];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onStateChange() {
      rerender();
    },
  });

  useEffect(() => {
    setData([...tableData]);
  }, [tableData]);
  return (
    <table className="w-full rounded-2xl p-5">
      <thead className="w-full table-header rounded-t-2xl">
        {table.getHeaderGroups().map((headerGroup, index) => (
          <tr
            className={cn("rounded rounded-t-2xl bg-[#0E1746]", tableHeadColor)}
            key={index}
          >
            {headerGroup.headers.map((header) => (
              <th
                className="mb-2 border-b p-4 px-4 md:px-10 text-xs sm:text-sm md:text-base text-left font-semibold whitespace-nowrap"
                key={header.id}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="w-full text-main_darker_blue">
        {table.getRowModel().rows.map((row, index) => (
          <tr
            className={cn(
              "w-full cursor-pointer transition-all whitespace-nowrap bg-white",
              {
                "bg-[#F2F8FF]": index % 2 === 0,
                "rounded-b-2xl": index === table.getRowModel().rows.length - 1,
              }
            )}
            key={row.id}
          >
            {row.getVisibleCells().map((cell) => (
              <td
                className="px-4 md:px-10 py-4 text-xs sm:text-sm md:text-base"
                key={cell.id}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodayPicksTable;
