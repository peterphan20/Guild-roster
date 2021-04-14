// import React from "react";
// import styled from "styled-components";

// const CharacterRoleCheck = ({ results }) => {
// 	const classCheck = results.map((member) => {
// 		switch (member.classname) {
// 			case "Death Knight":
// 				return (
// 					<div>
// 						<i className="fas fa-shield-alt tank"></i>
// 						<i className="fas fa-khanda dps"></i>
// 					</div>
// 				);
// 				break;
// 			case "Demon Hunter":
// 				return (
// 					<div>
// 						<i className="fas fa-shield-alt tank"></i>
// 						<i className="fas fa-khanda dps"></i>
// 					</div>
// 				);
// 				break;
// 			case "Druid":
// 				return (
// 					<div>
// 						<i className="fas fa-plus-circle healer"></i>
// 						<i className="fas fa-shield-alt tank"></i>
// 						<i className="fas fa-khanda dps"></i>
// 					</div>
// 				);
// 				break;
// 			case "Hunter":
// 				return <i className="fas fa-khanda dps"></i>;
// 				break;
// 			case "Mage":
// 				return <i className="fas fa-khanda dps"></i>;
// 				break;
// 			case "Monk":
// 				return (
// 					<div>
// 						<i className="fas fa-plus-circle healer"></i>
// 						<i className="fas fa-shield-alt tank"></i>
// 						<i className="fas fa-khanda dps"></i>
// 					</div>
// 				);
// 				break;
// 			case "Paladin":
// 				return (
// 					<div>
// 						<i className="fas fa-plus-circle healer"></i>
// 						<i className="fas fa-shield-alt tank"></i>
// 						<i className="fas fa-khanda dps"></i>
// 					</div>
// 				);
// 				break;
// 			case "Priest":
// 				return (
// 					<div>
// 						<i className="fas fa-plus-circle healer"></i>
// 						<i className="fas fa-khanda dps"></i>
// 					</div>
// 				);
// 				break;
// 			case "Rogue":
// 				return <i className="fas fa-khanda dps"></i>;
// 				break;
// 			case "Shaman":
// 				return (
// 					<div>
// 						<i className="fas fa-plus-circle healer"></i>
// 						<i className="fas fa-khanda dps"></i>
// 					</div>
// 				);
// 				break;
// 			case "Warlock":
// 				return <i className="fas fa-khanda dps"></i>;
// 				break;
// 			case "Warrior":
// 				return (
// 					<div>
// 						<i className="fas fa-shield-alt tank"></i>
// 						<i className="fas fa-khanda dps"></i>
// 					</div>
// 				);
// 			default:
// 				return;
// 		}
// 	});

// 	return <FooterIcons>{classCheck}</FooterIcons>;
// };

// export default CharacterRoleCheck;

// const FooterIcons = styled.div`
// 	font-size: 1.2em;
// 	display: flex;
// 	gap: 10px;

// 	i:hover {
// 		transition: 0.2s ease;
// 		transform: scale(1.3);
// 		cursor: pointer;
// 	}
// `;
