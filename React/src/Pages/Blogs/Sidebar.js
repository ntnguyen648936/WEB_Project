import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 800px;
  background-color: #2e3a46;
  color: white;
  height: 100vh;
  padding: 20px;
  overflow-y: auto;
`;

const SidebarItem = styled.div`
  padding: 10px 0;
  cursor: pointer;
  background-color: ${props => props.isActive ? '#3a4d5e' : 'transparent'};
  
  &:hover {
    background-color: #3a4d5e;
  }
`;

const items = [
  'Giới thiệu', 
  'Kinh nghiệm làm việc', 
  'Kỹ năng', 
  'Dự án ngoài', 
  'Giáo dục', 
  'Giải thưởng', 
  'Thông tin liên hệ'
];

const Sidebar = ({ activeSection, setSelectedSection }) => {
  return (
    <SidebarContainer>
      {items.map((item, index) => (
        <SidebarItem 
          key={index} 
          isActive={item === activeSection} 
          onClick={() => setSelectedSection(item)}
        >
          {item}
        </SidebarItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
