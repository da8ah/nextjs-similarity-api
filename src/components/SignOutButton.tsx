"use client";

import Button from "@/ui/Button";
import { toast } from "@/ui/Toast";
import { signOut } from "next-auth/react";
import { FC, useState } from "react";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const signUserOut = async () => {
		setIsLoading(true);

		try {
			await signOut();
		} catch (error) {
			toast({
				title: "Error signing out",
				message: "Please try again later",
				type: "error",
			});
		}
	};

	return (
		<Button isLoading={isLoading} onClick={signUserOut}>
			Sign Out
		</Button>
	);
};

export default SignOutButton;
