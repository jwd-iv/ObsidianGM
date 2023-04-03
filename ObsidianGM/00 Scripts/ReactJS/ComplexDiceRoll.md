class DiceRoll extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			formula : props.formula,
			result : "Loading..."
		}

		customJS.Dice.Roll(props.formula)
			.then(result => this.processRollResult(result))
	}

	processRollResult(result)
	{
		console.log(result)
		this.setState((state, props) => {
			return {
				formula : state.formula,
				result
			}
		})
		this.render()
	}

	render() {
		return (
			<ul>
				<li>{this?.state?.formula}:: {this?.state?.result ?? "wtf?"}</li>
			</ul>
		);
	}
}

return new DiceRoll(props)
