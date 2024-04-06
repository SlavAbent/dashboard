import React, { FC, useContext, useMemo } from "react";
import { IList } from "../../../../model/index.model";
import classNames from "classnames";
import { AsideNavLink, AsideRow, AsideRowText, AsideNavLinkWrapper } from "./AsideContainer.styles";
import { uniqueId } from "lodash";
import { Badge } from "../../../../../../stories/UI/Components/Badge";
import { Delete } from "../../../../../../components/Icons/Delete";
import { ListContext } from "../../../../../../context/providers/listProvider";

interface AsideCreateProps {
  data?: IList[]
  handleAsideDeleteItem?: (list: IList) => void
  themeColor: string
}

export const AsideRowCreate:FC<AsideCreateProps> = (props) => {
	const { handleAsideDeleteItem, themeColor} = props;
	const { response } = useContext(ListContext);

	const dataAside = useMemo(() => {
		if(Array.isArray(response)) {
			return response && response.map((list: IList) => {
				const { id, name } = list.color;
				const className = classNames("badge", { [`badge--${name}`]: name}, "default");
				return (
					<AsideNavLinkWrapper
						key={uniqueId("list_")}
						color={themeColor}
					>
						<AsideNavLink
							color={themeColor}
							to={`${list.id}`}
						>
							<AsideRow>
								<Badge
									id={id}
									className={className}
									size={12}
									color="custom--badge"
								/>
								<AsideRowText>{list?.name}</AsideRowText>
								<Delete
									size={16}
									onClick={() => handleAsideDeleteItem && handleAsideDeleteItem(list)}
								/>
							</AsideRow>
						</AsideNavLink>
					</AsideNavLinkWrapper>
				);
			});
		}
	}, [response, handleAsideDeleteItem]);

	return <> {dataAside} </>;
};
