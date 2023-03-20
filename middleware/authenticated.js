import { useAuth } from '~/stores/auth';

export default function () {
  const auth = useAuth();
  const router = useRouter();
  if (!auth.auth) {
    alert('로그인을 해주세요');
    router.push({ path: '/' });
  }
}
