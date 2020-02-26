import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Row, Col, Container, Table, Button } from 'react-bootstrap'

import SEO from "../components/seo"
import data from "../components/data"

let { continents } = data

const setFilterKeys = () => {
  return continents.map((c) => setFilterKey(c) )
}
const setFilterKey = function(c1, parentKey=null){
  const key = parentKey ? `${parentKey}=>${c1.name}` : c1.name
  if ( !c1.children ) {
    return { ...c1, key }
  }
  const children = !!c1.children ? c1.children.map((j,i) => (setFilterKey(j, key)) ) : undefined
  return { ...c1, key, children }
}

let places = setFilterKeys()



const IndexPage = () => {

  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [show, setShow] = useState({});

  useEffect(() => {

    setFilters(places)
    setUsers(data.users)

  }, [])

  const onFilterChange = (filter, e) => {
    const check = e.target.checked

    let selected = { ...selectedFilters, [filter.key]: check }

    if (filter.children) {
      filter.children.forEach((f) => {
        selected[f.key] = check
        if (f.children) {
          f.children.forEach((f) => {
            selected[f.key] = check
          })
        }
      })
    }
      
    setSelectedFilters(selected)
    const keys = Object.keys(selected).filter((k)=> !!selected[k] );

    const selectedUsers =  keys.length === 0 ?  data.users : data.users.filter((u) => {
      return keys.filter((key)=> key.includes(u.city) ).length > 0
    })
    setUsers(selectedUsers)
  }

  const toggle = (c) => { 
    const val = show[c.key] === undefined || show[c.key] === false ? true : false
    const showing = { ...show, [c.key]: val }
    setShow(showing)
  }

  const filterRow = (filter, key=1) => (
    <div key={key} style={{ paddingLeft: '2rem' }}>
      <div>
        <input
          checked={selectedFilters[filter.key]}
          type="checkbox"
          id={filter.key}
          label={filter.name}
          onChange={(e) => onFilterChange(filter, e)}
        />
        {
          filter.children && (
            <Button style={{ paddingLeft: '1rem' }} variant="link"
              onClick={(e) => toggle(filter)} >+</Button>
          )
        }

        <label onClick={(e) => toggle(filter)} 
          style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
          {filter.name}
        </label>

      </div>
      {
        filter.children && show[filter.key] && filter.children.map((f, j)=>(
          filterRow(f, j)
        ))
      }
    </div>
  )

  return (
  <Layout>
    <SEO title="Home" />

    <Container>
      <Row className="justify-content-center">
        <Col lg="12">
          {
            filters && filters.map((continent, i) => (
              filterRow(continent, i)
            ))
          }
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg="12">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Surname</th>
                <th>City</th>
                <th>Zip</th>
              </tr>
            </thead>
            <tbody>
              {
                users && users.map((user, i) => (
                  <tr key={i} >
                    <td> <span>{ i + 1 }</span> </td>
                    <td> { user.name } </td>
                    <td> { user.lastName } </td>
                    <td> { user.city } </td>
                    <td> { user.zip } </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  </Layout>
)
}

export default IndexPage
