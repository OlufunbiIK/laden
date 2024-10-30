import React from "react";

export default function OurOffers() {
	return (
		<div className="w-full my-10 max-w-4xl mx-auto p-6 bg-white rounded-md overflow-auto">
			<h1 className="text-2xl font-semibold mb-4 text-center text-[48px]">
				Our Offers
			</h1>
			<table className="w-full border-collapse border border-[#828282]">
				<thead>
					<tr className="bg-[#5E286640] text-[#BB2E94] text-[14px]">
						<th className="border border-neutral-300 px-4 py-2 text-left">
							Care Level
						</th>
						<th className="border border-neutral-300 px-4 py-2 text-left">
							Monthly Care Benefits
						</th>
						<th className="border border-neutral-300 px-4 py-2 text-left">
							Monthly Care Allowance
						</th>
						<th className="border border-neutral-300 px-4 py-2 text-left">
							Relief Amount per Month
						</th>
					</tr>
				</thead>
				<tbody className="text-[14px]">
					<tr>
						<td className="border border-neutral-300 px-4 py-2">
							Level 1
						</td>
						<td className="border border-neutral-300 px-4 py-2"></td>
						<td className="border border-neutral-300 px-4 py-2"></td>
						<td className="border border-neutral-300 px-4 py-2">
							$100
						</td>
					</tr>
					<tr className="bg-neutral-50">
						<td className="border border-neutral-300 px-4 py-2">
							Level 2
						</td>
						<td className="border border-neutral-300 px-4 py-2">
							$700
						</td>
						<td className="border border-neutral-300 px-4 py-2">
							$400
						</td>
						<td className="border border-neutral-300 px-4 py-2">
							$150
						</td>
					</tr>
					<tr>
						<td className="border border-neutral-300 px-4 py-2">
							Level 3
						</td>
						<td className="border border-neutral-300 px-4 py-2">
							$900
						</td>
						<td className="border border-neutral-300 px-4 py-2">
							$500
						</td>
						<td className="border border-neutral-300 px-4 py-2">
							$200
						</td>
					</tr>
					<tr>
						<td className="border border-neutral-300 px-4 py-2">
							Level 4
						</td>
						<td className="border border-neutral-300 px-4 py-2">
							$900
						</td>
						<td className="border border-neutral-300 px-4 py-2">
							$500
						</td>
						<td className="border border-neutral-300 px-4 py-2">
							$200
						</td>
					</tr>
					<tr>
						<td className="border border-neutral-300 px-4 py-2">
							Level 5
						</td>
						<td className="border border-neutral-300 px-4 py-2">
							$900
						</td>
						<td className="border border-neutral-300 px-4 py-2">
							$500
						</td>
						<td className="border border-neutral-300 px-4 py-2">
							$200
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
