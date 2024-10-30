import React from "react";

export default function ImprintDetails() {
	return (
		<div
			data-aos="zoom-out"
			data-aos-duration="2000"
			className="space-y-4 md:mx-20 mx-2"
		>
			<h1 className="text-[#5E2866]">Imprint</h1>
			<div>
				<p>Friedrich Wilhelm Street 3, 47051 Duisburg</p>
			</div>
			<div>
				<h1 className="text-[#5E2866]">Contact</h1>
				<div className="flex flex-row">
					<p>Telephone: </p>
					<p>017620937596</p>
				</div>
				<p>Email: Intensivpflegedienst-lebenskraft@web.de</p>
			</div>
			<div>
				<h1 className="text-[#5E2866]">EU Dispute Settlement</h1>
				<p>
					The European Commission provides a platform for online
					dispute resolution (ODR):{" "}
					<a
						href="https://ec.europa.eu/consumers/odr"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://ec.europa.eu/consumers/odr
					</a>
					.
					<br />
					Our email address can be found above in the imprint.
				</p>
			</div>
			<div>
				<h1 className="text-[#5E2866]">
					Consumer dispute resolution/universal arbitration board
				</h1>
				<p>
					We are not willing or obliged to participate in dispute
					resolution proceedings before a consumer arbitration board.
				</p>
			</div>
			<div>
				<h1 className="text-[#5E2866]">Image ResouResources </h1>
				<p>Pixel</p>
				<p>Own</p>
			</div>
		</div>
	);
}
