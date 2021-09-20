import React from "react"
import { View, Text, StyleSheet, TouchableHighlight } from "react-native"

const Task = ({ task, removeTask }) => {
	return (
		<View style={styles.task}>
			<View>
				<Text style={styles.label}>Name:</Text>
				<Text style={styles.text}>{task.name}</Text>
			</View>
			<View>
				<Text style={styles.label}>Area:</Text>
				<Text style={styles.text}>{task.area}</Text>
			</View>
			<View>
				<Text style={styles.label}>Description:</Text>
				<Text style={styles.text}>{task.description}</Text>
			</View>
			<View>
				<TouchableHighlight
					onPress={() => removeTask(task.id)}
					style={styles.btnDelete}
				>
					<Text style={styles.txtDelete}>Delete</Text>
				</TouchableHighlight>
			</View>
		</View>
	)
}

export default Task

const styles = StyleSheet.create({
	task: {
		marginBottom: 10,
		backgroundColor: "#FFF",
		borderColor: "#000",
		borderRadius: 5,
		borderStyle: "solid",
		borderWidth: 0.2,
		paddingHorizontal: 10,
		paddingVertical: 20,
	},
	label: {
		fontWeight: "bold",
		fontSize: 18,
	},
	text: {
		fontSize: 16,
		marginBottom: 10,
	},
	btnDelete: {
		padding: 10,
		backgroundColor: "#FF6767",
		marginVertical: 10,
		borderRadius: 8,
	},
	txtDelete: {
		color: "#FFFFFF",
		fontWeight: "bold",
		fontSize: 16,
		textAlign: "center",
	},
})
