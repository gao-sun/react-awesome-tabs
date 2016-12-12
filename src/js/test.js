import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tabs, { Tab } from './react-awesome-tabs';

export class Simple extends Component {
	handleTabSwitch(active) {
		this.setState({ activeTab: active });
	}

	constructor(props) {
		super(props);
		this.state = {
			activeTab: 0
		};
	}

	render() {
		return (
			<Tabs
				active={ this.state.activeTab }
				onTabSwitch={ this.handleTabSwitch.bind(this) }
			>
				<Tab title="Tab1">foo</Tab>
				<Tab title="Tab2">bar</Tab>
				<Tab title="Tab3">baz</Tab>
			</Tabs>
		);
	}
}

export class Drag extends Component {
	tabs = [];

	handleTabSwitch(active) {
		this.setState({ activeTab: active });
	}

	handleTabPositionChange(a, b) {
		let c = this.tabs[a];
		this.tabs[a] = this.tabs[b];
		this.tabs[b] = c;

		if(this.state.activeTab == a) {
			this.setState({ activeTab: b });
		}else if(this.state.activeTab == b) {
			this.setState({ activeTab: a });
		}

		this.forceUpdate()
	}

	constructor(props) {
		super(props);
		this.state = {
			activeTab: 0
		};
		this.tabs = [
			{
				title: 'Tab1',
				content: 'foo'
			},
			{
				title: 'Tab2',
				content: 'bar'
			},
			{

				title: 'Tab3',
				content: 'baz'
			},
		];
	}

	render() {
		return (
			<Tabs
				active={ this.state.activeTab }
				onTabSwitch={ this.handleTabSwitch.bind(this) }
				onTabPositionChange={ this.handleTabPositionChange.bind(this) }
				draggable={ true }
			>
				{
					this.tabs.map((value, index) => {
						return (
							<Tab 
								key={ index } 
								title={ value.title }
							>
								{ value.content }
							</Tab>
						);
					})
				}
			</Tabs>
		);
	}
}

export class Change extends Component {
	tabs = [];

	handleTabSwitch(active) {
		this.setState({ activeTab: active });
	}

	handleTabPositionChange(a, b) {
		let c = this.tabs[a];
		this.tabs[a] = this.tabs[b];
		this.tabs[b] = c;

		if(this.state.activeTab == a) {
			this.setState({ activeTab: b });
		}else if(this.state.activeTab == b) {
			this.setState({ activeTab: a });
		}

		this.forceUpdate()
	}

	handleTabClose(index) {
		this.tabs.splice(index, 1);

		if(this.state.activeTab >= this.tabs.length) {
			this.setState({ activeTab: this.tabs.length - 1 });
		}

		this.forceUpdate();
	}

	handleTabAdd() {
		this.tabs.push({
			title: 'New Tab',
			content: 'Hey Buddy!'
		});

		this.setState({
			activeTab: this.tabs.length - 1
		});
	}

	constructor(props) {
		super(props);
		this.state = {
			activeTab: 0
		};

		this.tabs = [
			{
				title: 'Tab1',
				content: 'foo'
			},
			{
				title: 'Tab2',
				content: 'bar'
			},
			{

				title: 'Tab3',
				content: 'baz'
			},
		];
	}

	render() {
		return (
			<Tabs
				active={ this.state.activeTab }
				onTabSwitch={ this.handleTabSwitch.bind(this) }
				onTabPositionChange={ this.handleTabPositionChange.bind(this) }
				onTabClose={ this.handleTabClose.bind(this) }
				onTabAdd={ this.handleTabAdd.bind(this) }
				draggable={ true }
				showAdd={ true }
			>
				{
					this.tabs.map((value, index) => {
						return (
							<Tab 
								key={ index } 
								title={ value.title }
								showClose={ true }
							>
								{ value.content }
							</Tab>
						);
					})
				}
			</Tabs>
		);
	}
}

export class Lively extends Component {
	handleTabSwitch(active) {
		this.setState({ activeTab: active });
	}

	constructor(props) {
		super(props);
		this.state = {
			activeTab: 0
		};
	}

	render() {
		return (
			<Tabs
				active={ this.state.activeTab }
				color="orange"
				onTabSwitch={ this.handleTabSwitch.bind(this) }
			>
				<Tab icon="loading" title="Loadig">foo</Tab>
				<Tab icon="warning" title="Warning">bar</Tab>
				<Tab icon={(<span>[T]&nbsp;</span>)} title="Tab3">baz</Tab>
			</Tabs>
		);
	}
}

ReactDOM.render((
	<Simple></Simple>
), document.getElementById('simple'));

ReactDOM.render((
	<Drag></Drag>
), document.getElementById('drag'));

ReactDOM.render((
	<Change></Change>
), document.getElementById('change'));

ReactDOM.render((
	<Lively></Lively>
), document.getElementById('lively'));