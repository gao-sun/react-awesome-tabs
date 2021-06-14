# react-awesome-tabs

Get your components together.

Live demo and get started @[react-awesome-tabs](http://gao-sun.github.io/react-awesome-tabs).

## Documentation

### Introduction

**react-awesome-tabs** uses a 'Redux' way to manage all the things, that is to say there is no 'state' in this component. All the changes are based on 'property'.

### &lt;Tabs&gt;
#### Variables
|Property Name|Type|Description|
|---|---|---|
|active|Number|Current active tab index.|
|draggable|Boolean|When it is **true**, **onTabPositionChange** is required as well.|
|showAdd|Boolean|Show the add button in the right. **onTabAdd** is required.|
|color|String|Change the border color.|
#### Functions
|Property Name|Parameter|Description|
|---|---|---|
|onTabSwitch|(index)|Index needs to be actived.|
|onTabPositionChange|(a, b)|Switch from index a to index b, and vice versa.|
|onTabClose|(index)|Index needs to be closed.|
|onTabAdd|()||

### &lt;Tab&gt;
#### Variables
|Property Name|Type|Description|
|---|---|---|
|title|String||
|showClose|Boolean||
|icon|String or Component|Acceptable strings: "loading", "warning", or put your own icon in it.|
