import { Prices } from "@/widgets/Prices";
import { AboutSalsa } from "@/widgets/AboutSalsa";
import { Questions } from "@/widgets/Questions";
import { Form } from "@/widgets/Form";
import { Information } from "@/widgets/Information";
import { Intro } from "@/widgets/Intro";
import { Lessons } from "@/widgets/Lessons";
import { LookSalsa } from "@/widgets/LookSalsa";
import { Photos } from "@/widgets/Photos";
import { Salsa } from "@/widgets/Salsa";
import { School } from "@/widgets/School";


export default function Home() {

  const bgSecond = 'var(--bg-color-second)';
  const bgFirst = 'var(--bg-color)';
  return (
    <main>
      {/* <Intro/> */}
      <AboutSalsa/>
      <Salsa backgroundColor={bgSecond}/>
      <School backgroundColor={bgFirst} backgroundColorCard={bgSecond}/>
      <Lessons backgroundColor={bgSecond}/>
      <Prices backgroundColor={bgFirst}/>
      <LookSalsa backgroundColor={bgSecond}/>
      
      {/* <Photos backgroundColor={bgFirst}/> */}
      <Questions backgroundColor={bgSecond}/>
      <Information backgroundColor={bgFirst}/>
      <Form backgroundColor={bgSecond}/>
    </main>
  );
}
