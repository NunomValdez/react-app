export default function Tabs({ children, buttons, ButtonContainer = "menu" }) {
  // we could use the buttonContainer prop being dynamically set in the Tabs component, when we use it, or set a default value to that variable like we're doing now, with the " ='menu' " value
  //   const ButtonContainer = buttonContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
