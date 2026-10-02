import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					padding: "80px",
					background:
						"radial-gradient(circle at 85% 10%, rgba(125,211,252,0.12), transparent 50%), #09090b",
					color: "white",
				}}
			>
				<div
					style={{
						fontSize: 96,
						fontWeight: 800,
					}}
				>
					{site.name}
				</div>
				<div style={{ width: 64, height: 3, background: "#7dd3fc", marginTop: 28 }} />
				<div style={{ fontSize: 44, fontWeight: 600, marginTop: 28 }}>{site.role}</div>
				<div style={{ fontSize: 30, color: "#a1a1aa", marginTop: 24, maxWidth: 900 }}>
					{site.tagline}
				</div>
			</div>
		),
		size,
	);
}
