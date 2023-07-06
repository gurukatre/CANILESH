import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import Image from 'next/image';
import style from '../styles/index.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={style.profileWrapper}>
        <div>
          <Image
            className={style.profileImage}
            src="/images/profile.jpeg"
            height={400}
            width={400}
            alt="Nilesh"
          />
        </div>

        <div className={style.profileAbout}>
          <h1 className={style.profileAboutHeading}>About Us</h1>
          <div>
            Nilesh Fase & Associates is a professionally managed firm catering
            to domestic and international clients with a broad range of services
            in the field of audit, consulting, tax advisory, accounting and
            allied areas.
          </div>
          <div>
            The team at the firm has dedicated and experienced professionals and
            associates like Chartered Accountants, Company Secretary, Cost
            Management Accountants, Advocates to provide end to end services to
            your business.
          </div>
          <div>
            We aspire to build a high five team where “We is the Key” because of
            our belief that “None of us is as smart as All of us.” With the
            effort of gaining a deep understanding of your business, the team is
            committed to adding value to each of clients in a totally
            Professional, independent and ethical manner. Our objective is to
            help our clients to focus on and achieve their business and
            financial goals by providing them services that are personalized and
            tailored to meet our client’s requirements that suit their business
            the best.
          </div>
        </div>
      </div>
    </div>
  );
}
