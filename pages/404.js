import Image from 'next/image';
import styles from '../components/layout.module.css';

export default function Custom404() {
    return (
    <div className={styles.container}>
        <h1>404 - Page Not Found</h1>
        <Image
                priority
                src="/images/yoongi-suga.gif"
                height={214}
                width={382}
                alt=""
                />
    </div>
   )
  }
   
    
    