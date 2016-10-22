// import React from 'react';
// import {FileInput} from 'react-file-input'

var NavComponent = React.createClass({displayName: "NavComponent",
    uploadSingleFile: function(){
        console.log('testing');
    },
    render: function(){
        return (
            React.createElement("div", {className: "navbar-a"}, 
                React.createElement("span", {id: "logo"}, "S3 GUI"), 
                React.createElement("span", {className: "behavior-button action", id: "file-uploader", onClick: this.uploadSingleFile}, "upload"), 
                React.createElement("span", {className: "behavior-button default"}, "new folder")
            )
        );
    }
});

ReactDOM.render(React.createElement(NavComponent, {name: "nav"}), document.getElementById('navbar'));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibWFpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCLDZDQUE2Qzs7QUFFN0MsSUFBSSxrQ0FBa0MsNEJBQUE7SUFDbEMsZ0JBQWdCLEVBQUUsVUFBVTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzFCO0lBQ0QsTUFBTSxFQUFFLFVBQVU7UUFDZDtZQUNJLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsVUFBVyxDQUFBLEVBQUE7Z0JBQ3RCLG9CQUFBLE1BQUssRUFBQSxDQUFBLENBQUMsRUFBQSxFQUFFLENBQUMsTUFBTyxDQUFBLEVBQUEsUUFBYSxDQUFBLEVBQUE7Z0JBQzdCLG9CQUFBLE1BQUssRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsd0JBQUEsRUFBd0IsQ0FBQyxFQUFBLEVBQUUsQ0FBQyxlQUFBLEVBQWUsQ0FBQyxPQUFBLEVBQU8sQ0FBRSxJQUFJLENBQUMsZ0JBQWtCLENBQUEsRUFBQSxRQUFhLENBQUEsRUFBQTtnQkFDekcsb0JBQUEsTUFBSyxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyx5QkFBMEIsQ0FBQSxFQUFBLFlBQWlCLENBQUE7WUFDekQsQ0FBQTtVQUNSO0tBQ0w7QUFDTCxDQUFDLENBQUMsQ0FBQzs7QUFFSCxRQUFRLENBQUMsTUFBTSxDQUFDLG9CQUFDLFlBQVksRUFBQSxDQUFBLENBQUMsSUFBQSxFQUFJLENBQUMsS0FBSyxDQUFBLENBQUcsQ0FBQSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQge0ZpbGVJbnB1dH0gZnJvbSAncmVhY3QtZmlsZS1pbnB1dCdcblxudmFyIE5hdkNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICB1cGxvYWRTaW5nbGVGaWxlOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZygndGVzdGluZycpO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwibG9nb1wiPlMzIEdVSTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZWhhdmlvci1idXR0b24gYWN0aW9uXCIgaWQ9XCJmaWxlLXVwbG9hZGVyXCIgb25DbGljaz17dGhpcy51cGxvYWRTaW5nbGVGaWxlfT51cGxvYWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmVoYXZpb3ItYnV0dG9uIGRlZmF1bHRcIj5uZXcgZm9sZGVyPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcig8TmF2Q29tcG9uZW50IG5hbWU9XCJuYXZcIiAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhcicpKTtcbiJdfQ==
