import { useAuth } from '../providers';

export default function Protected({
                                      children,
                                      role,
                                  }) {

    const auth = useAuth();

    return auth.user && (!role || auth.user.role === role) && children;

}