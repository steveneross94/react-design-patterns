import React from "react";

export const ControlledOnboardingFlow = ({ children, onFinish, currentIndex, onNext }) => {

  const currentChild = React.Children.toArray(children)[currentIndex];

  const goToNext = stepData => {
    onNext(stepData)

  }

  if (React.isValidElement(currentChild)){
    return React.cloneElement(currentChild, { goToNext })
  }

  if (currentIndex < children.length){
    return currentChild
  } else {
    alert("You've finished onboarding")
    return
  }
}