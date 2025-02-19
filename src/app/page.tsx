import { Prices } from '@/widgets/Prices';
import { AboutSalsa } from '@/widgets/AboutSalsa';
import { Questions } from '@/widgets/Questions';
import { TrialLesson } from '@/widgets/TrialLesson';
import { Information } from '@/widgets/Information';
import { Intro } from '@/widgets/Intro';
import { Lessons } from '@/widgets/Lessons';
import { LookSalsa } from '@/widgets/LookSalsa';
import { Photos } from '@/widgets/Photos';
import { Salsa } from '@/widgets/Salsa';
import { School } from '@/widgets/School';
import { PageWrapper } from '@/shared/ui/PageWrapper/PageWrapper';

export default function Home() {
    const refineDate = () => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();

        const dateAfterNewYear = new Date(currentYear, 0, 15);
        const dateBeforeNewYear = new Date(currentYear, 11, 24);
        
        return currentDate < dateAfterNewYear && currentDate > dateBeforeNewYear;
    }
    
    const isNewYear = refineDate();
    const bgSecond = 'var(--bg-color-second)';
    const bgFirst = 'var(--bg-color)';
    return (
        <PageWrapper>
            <Intro isNewYear={isNewYear} />
            <AboutSalsa />
            <Salsa backgroundColor={bgSecond} isNewYear={isNewYear} />
            <School
                backgroundColor={bgFirst}
                backgroundColorCard={bgSecond}
                isNewYear={isNewYear}
            />
            <Lessons backgroundColor={bgSecond} />
            <Prices backgroundColor={bgFirst} isNewYear={isNewYear} />
            <LookSalsa backgroundColor={bgSecond} isNewYear={isNewYear} />
            <Photos backgroundColor={bgFirst} isNewYear={isNewYear} />
            <Questions backgroundColor={bgSecond} isNewYear={isNewYear} />
            <Information backgroundColor={bgFirst} isNewYear={isNewYear} />
            <TrialLesson backgroundColor={bgSecond} />
        </PageWrapper>
    );
}
