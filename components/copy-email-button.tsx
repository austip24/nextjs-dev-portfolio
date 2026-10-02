"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function CopyEmailButton({ email }: { email: string }) {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (!copied) return;
		const timeout = setTimeout(() => setCopied(false), 2000);
		return () => clearTimeout(timeout);
	}, [copied]);

	async function copy() {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
		} catch {
			// Clipboard access can be denied; the mailto link remains available.
		}
	}

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button
					variant="outline"
					size="icon-lg"
					onClick={copy}
					aria-label={copied ? "Email address copied" : "Copy email address"}
				>
					{copied ? <Check className="text-brand" /> : <Copy />}
				</Button>
			</TooltipTrigger>
			<TooltipContent>{copied ? "Copied!" : "Copy email"}</TooltipContent>
		</Tooltip>
	);
}
