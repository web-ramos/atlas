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
          <div className={`${styles.stage__name_wrapper} ${styles.stage__name_wrapper_active}`}>
            <div className={styles.stage__name_active}>{stageItem.name ?? stageItem.nameActive}</div>
            {valueRender(stageItem)}
          </div>
          <div className={styles.tip}>{stageItem.tip}</div>
        </>
      );
    } else {
      return (
        <>
          <div className={styles.stage__name_wrapper}>
            <div className={styles.stage__name}>{stageItem.name}</div>
          </div>
        </>
      )
    }
  }

  return (
    <>
      <nav className={styles.container}>
        {stageList.map((stageItem) => {
          return (
            <div key={stageItem.id} className={styles.stage__item}>
              {itemRender(stageItem)}
            </div>
          )
        })}
      </nav>
    </>
  )
}

export default Stages