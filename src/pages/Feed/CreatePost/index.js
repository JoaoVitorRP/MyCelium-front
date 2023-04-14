import styled from 'styled-components';
import LandingForm from '../../../components/Feed/CreatePost/LandingForm';
import { useState } from 'react';
import PageTwoForm from '../../../components/Feed/CreatePost/PageTwoForm';

export default function CreatePost() {
  const [page, setPage] = useState(1);
  const [selectedFile, setSelectedFile] = useState();
  const [postData, setPostData] = useState({
    description: '',
    species: '',
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    if (
      name === 'species' &&
      (!/^[\sA-Z.a-z]*$/.test(value) || value === ' ' || value === '.' || value.includes('  ') || value.includes('..'))
    ) {
      return;
    }

    setPostData({ ...postData, [name]: value });
  }

  return (
    <FormContainer>
      {page === 1 && (
        <LandingForm
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          setPage={setPage}
          postData={postData}
          setPostData={setPostData}
          handleInputChange={handleInputChange}
        />
      )}
      {page === 2 && <PageTwoForm setPage={setPage} postData={postData} setPostData={setPostData} />}
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: 700px;

  font-family: 'Roboto';
`;
