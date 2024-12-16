import { EuiBasicTable } from "@elastic/eui";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { GET_COUNTRIES } from "./graphql/queries";
import { QueryData } from "./graphql/interfaces";

function CountryTable() {
	const { data } = useQuery<QueryData>(GET_COUNTRIES);

	// use a usememo to avoid re-rendering the table when the data changes
	const items = useMemo(() => data?.countries ?? [], [data]);

	const columns = [
		{
			field: "emoji",
			name: "Flag",
			render: (flag: string) => <span>{flag}</span>,
		},
		{
			field: "code",
			name: "ISO Code",
		},
		{
			field: "name",
			name: "Country Name",
		},
		{
			field: "continent.name",
			name: "Continent",
		},
	];

	return <EuiBasicTable items={items} columns={columns}></EuiBasicTable>;
}

export default CountryTable;
