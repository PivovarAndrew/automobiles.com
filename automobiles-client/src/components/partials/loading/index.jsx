import styles from './loading.module.scss'
import { ImSpinner2 } from 'react-icons/im';

/**
 * Decorative component that represents loading.
 *
 * @return { ReactElement } The loading.
 */
const Loading = () => (
    <ImSpinner2 className={styles.spinner} />
)

export default Loading;
