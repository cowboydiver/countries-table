import { EuiProvider, EuiText } from "@elastic/eui";
import CountreTable from "./components/CountreTably";

const MyApp = () => (
	<EuiProvider>
		<EuiText>
			<p>Countries!</p>
			<CountreTable />
		</EuiText>
	</EuiProvider>
);
export default MyApp;
