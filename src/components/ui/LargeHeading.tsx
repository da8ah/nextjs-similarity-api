import { forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
	"text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter",
	{
		variants: {
			size: {
				default: "text-4xl md:text-5xl lg:text-6l",
				lg: "text-5xl md:text-6xl lg:text-7l",
				sm: "text-2xl md:text-3xl lg:text-4l",
			},
		},
		defaultVariants: {
			size: "default",
		},
	},
);

interface LargeHeadingProps
	extends HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof headingVariants> {}

const Paragraph = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
	({ className, size, children, ...props }, ref) => {
		return (
			<h1
				ref={ref}
				{...props}
				className={cn(headingVariants({ size, className }))}
			>
				{children}
			</h1>
		);
	},
);

Paragraph.displayName = "LargeHeadning";

export default Paragraph;
