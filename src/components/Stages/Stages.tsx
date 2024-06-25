import styles from './Stages.module.scss'


const fake = {

}

export enum Stage {
  SUMMARY,
  ACCOMODATIONS,
  GUESTS,
  STATEROOM,
  PAYMENT
}

interface IStage {
  id: Stage,
  name: string,
  nameActive?: string,
  tip: string,
  value: string | Array<string> | null
}

const stageList: IStage[] = [
  {
    id: Stage.SUMMARY,
    name: "Summary",
    nameActive: "Summary",
    tip: "Overview of the details of your itinerary",
    value: "Ushuaia Roundtrip",
  },
  {
    id: Stage.ACCOMODATIONS,
    name: "Accommodations",
    tip: "Select your desired accommodations.",
    value: null,
  },
  {
    id: Stage.GUESTS,
    name: "Guest",
    tip: "Enter your guest details.",
    value: null,
  },
  {
    id: Stage.STATEROOM,
    name: "Stateroom Assignment",
    tip: "Summary of your itinerary.",
    value: null,
  },
  {
    id: Stage.PAYMENT,
    name: "Payment",
    tip: "Review and Pay",
    value: null,
  },
];

interface propsStages {
  stageCurrent: Stage;
}

const Stages = ( {stageCurrent = Stage.SUMMARY} : propsStages) => {

  const valueRender = (stageItem: IStage) => {
    if (typeof stageItem.value === 'string') {
        return <div>{stageItem.value}</div>
    } else if (Array.isArray(stageItem.value)) {
      return (
        stageItem.value.map((item, index) => {
          return (
            <div key={index}>
              {item}
            </div>
          )
        })
      )
    } else {
      return null;
    }
  }

  const itemRender = (stageItem: IStage) => {
    if (stageCurrent == stageItem.id ) {
      return (
        <>
          <div>{stageItem.name ?? stageItem.nameActive}</div>
          {valueRender(stageItem)}
          <div>{stageItem.tip}</div>
        </>
      );
    } else {
      return (
        <>
          <div>{stageItem.name}</div>
        </>
      )
    }
  }

  return (
    <>
      <nav>
        {stageList.map((stageItem) => {
          return (
            <div key={stageItem.id}>
              {itemRender(stageItem)}
            </div>
          )
        })}
      </nav>
    </>
  )
}

export default Stages