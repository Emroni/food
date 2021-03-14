import { useAuth } from '../providers';

export default function Protected({children}) {

    const auth = useAuth();

    return auth.user && children;

}