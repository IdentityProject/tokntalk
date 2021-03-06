import React from 'react';

import Context from '../Context';
import Header from '../Header';
import { Thread } from '../Thread';
import { SidebarProvider, SidebarContainer, SidebarLeft, SidebarRight } from '../Sidebar';

const ThreadApp = (props) => (
  <SidebarProvider>
    <Header />
    <SidebarContainer>
      <SidebarLeft />
      <SidebarRight>
        <Context.Consumer>
          {({ feedStore }) => <Thread {...props} getFeedItem={feedStore.getFeedItem} />}
        </Context.Consumer>
      </SidebarRight>
    </SidebarContainer>
  </SidebarProvider>
);

export default ThreadApp;
