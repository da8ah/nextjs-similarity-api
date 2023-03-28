"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="system">
			<SessionProvider>{children}</SessionProvider>
		</ThemeProvider>
	);
};

export default Providers;
