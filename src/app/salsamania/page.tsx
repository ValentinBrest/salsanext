
import { Form } from "@/widgets/Form";
import { SalsaMania } from "@/widgets/SalsaMania";


export default function Home() {

  const bgSecond = 'var(--bg-color-second)';
    const bgFirst = 'var(--bg-color)';
  return (
    <main>
      <SalsaMania backgroundColor={bgSecond}/>
      <Form backgroundColor={bgSecond}/>
    </main>
  );
}
