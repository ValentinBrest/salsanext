import { Abonement } from "@/widgets/Abonement";
import { AboutSalsa } from "@/widgets/AboutSalsa";
import { Questions } from "@/widgets/Questions";
import { Form } from "@/widgets/Form";
import { Information } from "@/widgets/Information";
import { Intro } from "@/widgets/Intro";
import { Lessons } from "@/widgets/Lessons";
import { LookSalsa } from "@/widgets/LookSalsa";
import { Photos } from "@/widgets/Photos";
import { WhySalsa } from "@/widgets/WhySalsa";
import { WhySchool } from "@/widgets/WhySchool";


export default function Home() {

  const bgSecond = 'var(--bg-color-second)';
  const bgFirst = 'var(--bg-color)';
  return (
    <main>
      <Intro/>
      <AboutSalsa/>
      <WhySalsa backgroundColor={bgSecond}/>
      <WhySchool backgroundColor={bgFirst} backgroundColorCard={bgSecond}/>
      <Lessons backgroundColor={bgSecond}/>
      <Abonement backgroundColor={bgFirst}/>
      <LookSalsa backgroundColor={bgSecond}/>
      
      <Photos backgroundColor={bgFirst}/>
      <Questions backgroundColor={bgSecond}/>
      <Information backgroundColor={bgFirst}/>
      <Form backgroundColor={bgSecond}/>
    </main>
  );
}
