import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "./src/components/navigator/Navigator";

export default function App() {
	return (
		<SafeAreaProvider>
			<Navigator />
		</SafeAreaProvider>
	);
}
