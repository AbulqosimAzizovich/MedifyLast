import {Mentions} from 'antd';
import debounce from 'lodash/debounce';
import React, {useCallback, useRef, useState} from 'react';

const {Option} = Mentions;
const AsynchronousLoading = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const ref = useRef();
  const loadGithubUsers = (key) => {
    if (!key) {
      setUsers([]);
      return;
    }
    fetch(`https://api.github.com/search/users?q=${key}`)
      .then((res) => res.json())
      .then(({items = []}) => {
        if (ref.current !== key) return;
        setLoading(false);
        setUsers(items.slice(0, 10));
      });
  };
  const debounceLoadGithubUsers = useCallback(
    debounce(loadGithubUsers, 800),
    [],
  );
  const onSearch = (search) => {
    ref.current = search;
    setLoading(!!search);
    setUsers([]);
    debounceLoadGithubUsers(search);
  };
  return (
    <Mentions
      style={{
        width: '100%',
      }}
      loading={loading}
      onSearch={onSearch}
    >
      {users.map(({login, avatar_url: avatar}) => (
        <Option key={login} value={login} className='antd-demo-dynamic-option'>
          <img src={avatar} alt={login} />
          <span>{login}</span>
        </Option>
      ))}
    </Mentions>
  );
};
export default AsynchronousLoading;
