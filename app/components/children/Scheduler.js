var React = require("react");
var {BigCalendar} = require("react-big-calendar");

class Scheduler extends React.Component  {
  constructor() {
    super();
  
  }
  render() {
    return (
     <BigCalendar
      // events={events}
      views={['month', 'week', 'day']}
      step={60}
      showMultiDayTimes
      //max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
      popup
      selectable
      onSelectEvent={event => alert(event.title)}
      defaultDate={new Date(2015, 3, 1)}
      // localizer={localizer}
      />
    );
  }
}

module.exports = Scheduler;