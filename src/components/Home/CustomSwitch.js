import { useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import Switch from 'react-switch';
import { MdNightlight } from 'react-icons/md';
import { BsSunFill } from 'react-icons/bs';

export default function CustomSwitch() {
  const [checked, setChecked] = useState(false);

  const setTheme = () => {
    var dataThemeAttribute = 'data-theme';
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === 'dark' ? 'light' : 'dark';
    body.setAttribute(dataThemeAttribute, newTheme);
  };

  const handleSwitch = () => {
    setChecked((prev) => !prev);
    setTheme();
  };

  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Col sx={9}>Set Theme:</Col>
      <Col sx={3}>
        <Switch
          onChange={handleSwitch}
          checked={checked}
          uncheckedIcon={<MdNightlight />}
          checkedIcon={<BsSunFill />}
        />
      </Col>
    </Container>
  );
}
