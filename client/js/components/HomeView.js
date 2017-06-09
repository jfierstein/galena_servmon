'use strict';

import { getSensorData } from 'actions/sensorActions';
import { getUsageData } from 'actions/sensorActions';
import { connect } from 'react-redux';

function mapStoreStateToProps(store) {
  return {
    sensors: store.serverStatus.sensors,
    usage: store.serverStatus.usage
  }
}

class HomeView extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
      this.props.dispatch(getSensorData());
      this.props.dispatch(getUsageData());
  }

  render() {
    let { sensors, usage } = this.props;
    usage = (usage) ? Array.from(usage) : [];
    const coreData = [];
    if(sensors && sensors['coretemp-isa-0000'] && sensors['coretemp-isa-0000']['ISA adapter']) {
      const cores = Object.keys(sensors['coretemp-isa-0000']['ISA adapter']);
      for(let i=0; i<cores.length; i++){
        let thisCore = sensors['coretemp-isa-0000']['ISA adapter'][cores[i]];
        coreData.push({ name: thisCore.name, temp: thisCore.value} );
      }
    }
    let coreListItems = [];
    coreData.forEach((core) => { coreListItems.push(<li><b>{core.name}</b>:<span>{core.temp}</span></li>); });

    let usageListItems = [];
    if(usage) usage.forEach((proc) => { usageListItems.push(<li><b>{proc.name}</b>:<span>MEM: {proc.usage.memory} CPU: {proc.usage.cpu}%</span></li>); });    

    return (
      <div>
        <div className="container">
          <h3>Sensors</h3>
          <ul>
            {coreListItems}
          </ul>

          <h3>Process Usage</h3>
          <ul>
            {usageListItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreStateToProps)(HomeView)