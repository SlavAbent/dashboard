import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskInformation, TaskStatus } from "./styles/TaskCard.styled";
import { FC } from "react";
import { TaskCardProps } from "../types";

export const TaskCard: FC<TaskCardProps> = ({ item, index }) => {
	const { id, Due_Date, Task, Status } = item;
	return (
		<Draggable key={id} draggableId={id} index={index}>
			{(provided) => (
				<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
					<TaskInformation>
						<p>{Task}</p>
						<TaskStatus>{Status}</TaskStatus>
						<div className="secondary-details">
							<p>
								<span>
									{new Date(Due_Date).toLocaleDateString("en-us", {
										month: "short",
										day: "2-digit"
									})}
								</span>
							</p>
						</div>
					</TaskInformation>
				</div>
			)}
		</Draggable>
	);
};
