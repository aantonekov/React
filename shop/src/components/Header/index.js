import { useState, useEffect} from 'react'
import React from 'react'
import {NavLink,  Route, Routes, Link, useLocation} from 'react-router-dom'


import { Layout, Menu, Breadcrumb, Alert, TreeSelect   } from 'antd';
import 'antd/dist/antd.css';

import style from './style.module.css'


function Page() {

  const { Header, Content,  } = Layout;

// =====navs==========
  const Apps = () => (
    <ul className="app-list">
      <li>
        <Link to="/">Home</Link>: <Link to="/">Спальные мешки</Link>
      </li>
      <li>
      <Link to="/">Home</Link>:<Link to="/CampingMatPage">Корематы</Link>
      </li>
      <li>
      <Link to="/">Home</Link>:<Link to="/TentsPage">Палатки</Link>
      </li>
    </ul>
  );

  const breadcrumbNameMap = {
    '/': 'Home',
    '/CampingMatPage': 'Корематы',
    '/TentsPage':'Палатки',
  }

 
//=====filter=======




  

  const [val, setVal] = useState();

  const tovarList = [
    { name: 'Спальный мешок (Двойной)', price:'270$'},
    { name: 'Спальный мешок (Летний)', price:'100$'},
    { name: 'Спальный мешок (Зимний)', price:'300$'},
    { name: 'Спальный мешок (Двойной)', price:'350$'},
    { name: 'Спальный мешок (Летний)', price:'200$'},
    { name: 'Спальный мешок (Зимний)', price:'420$'},
    
  ]

  const handleChange = (ev) => {
    setVal(ev.target.value)
  }

  const filterTovarList = tovarList.filter((item) => item.name === val); 


class Demo extends React.Component {

  state = {
    value: undefined,
    treeData: [
      { id: 1,  title: 'Цена меньше', },
      { id: 2,  title: 'Цена больше' },
    ],
  };

  // genTreeNode = (parentId, isLeaf = false) => {
  //   const random = Math.random().toString(36).substring(2, 6);
  //   return {
  //     id: random,
  //     pId: parentId,
  //     value: random,
  //     title: isLeaf ? 'Tree Node' : 'Expand to load',
  //     isLeaf,
  //   };
  // };

  // onLoadData = ({ id }) =>
  //   new Promise(resolve => {
  //     setTimeout(() => {
  //       this.setState({
  //         treeData: this.state.treeData.concat([
  //           this.genTreeNode(id, false),
  //           this.genTreeNode(id, true),
  //           this.genTreeNode(id, true),
  //         ]),
  //       });
  //       resolve();
  //     }, 300);
  //   });

  // onChange = value => {
  //   console.log(value);
  //   this.setState({ value });
  // };

  render() {
    const { treeData } = this.state;
    return (
      <TreeSelect
        treeDataSimpleMode
        style={{ width: '20%' }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please select"
        onChange={this.onChange}
        loadData={this.onLoadData}
        treeData={treeData}
      />
    );
  }
}

//=========home==============
  const Home = props => {
    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{breadcrumbNameMap[url]}</Link>
        </Breadcrumb.Item>
      );
    });
    const breadcrumbItems = [
      <Breadcrumb.Item key="home">
        <Link to="/">Home</Link>
      </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);
    return (
      <div className="demo">
        <Routes>
          <Route path="/" component={Apps} />
          <Route render={() => <span>Home Page</span>} />
        </Routes>
        <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
        <Breadcrumb>{breadcrumbItems}</Breadcrumb>
      </div>
    );
  };

 return(
   <>
    <Layout className="layout">

      <Header>
    
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <NavLink className = {style.navItems} to='/'>Sleaping Bag</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink className = {style.navItems} to='/CampingMatPage'>Camping Mat</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink className = {style.navItems} to='/TentsPage'>Tents</NavLink>
          </Menu.Item>
        </Menu>

      </Header>

      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Home />
          <h4>Цены на доступный товар</h4>
          {/* <Demo /> */}
          <select onChange={handleChange}>
            <option value = 'Спальный мешок (Летний)'>Спальный мешок (Летний)</option>
            <option value = 'Спальный мешок (Двойной)'>Спальный мешок (Двойной)</option>
            <option value = 'Спальный мешок (Зимний)'>Спальный мешок (Зимний)</option>
          </select>

          <div>
            {filterTovarList.map(item => (
             <div>{item.price}</div>
            ))}
          </div>
        </Breadcrumb>
        
      </Content>
    </Layout>
   </>
 )
}

export default Page;
