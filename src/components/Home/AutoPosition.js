import Typical from 'react-typical';

export default function AutoPosition() {
  return (
    <Typical
      steps={[
        'Software',
        1000,
        'Software Engineer',
        500,
        'Full',
        500,
        'Full Stack',
        500,
        'Full Stack Engineer',
        500,
      ]}
      loop={Infinity}
      wrapper="p"
    />
  );
}
