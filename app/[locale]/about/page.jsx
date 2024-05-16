import { useLocale, useTranslations } from 'next-intl';
import AboutComponent from './About';

export default function About() {
  const locale = useLocale();
  const t = useTranslations('about');

  return (
    <AboutComponent locale={locale} t={t} />
  )
}
