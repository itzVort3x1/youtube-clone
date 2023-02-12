import React from "react";
import AccountCardComponent from "./AccountCard";

const AccountDetailComponent = () => {
	return (
		<div className="min-h-full text-gray-200">
			<div
				style={{
					background: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
					height: "300px",
					zIndex: 10,
				}}
			></div>
			<div style={{ marginTop: "-100px" }}>
				<AccountCardComponent />
			</div>
		</div>
	);
};

export default AccountDetailComponent;
