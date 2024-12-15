import { EuiBasicTable, EuiProvider, EuiText } from "@elastic/eui";
const MyApp = () => (
	<EuiProvider>
		<EuiText>
			<p>Countries!</p>
			<EuiBasicTable
				items={[
					{ name: "USA", code: "us" },
					{ name: "Germany", code: "de" },
					{ name: "UK", code: "uk" },
				]}
				columns={[
					{ field: "name", name: "Name" },
					{ field: "code", name: "Code" },
				]}
			/>
		</EuiText>
	</EuiProvider>
);
export default MyApp;
