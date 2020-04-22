import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styles';
import { FiChevronLeft, FiChevronRight, FiAlertCircle, FiStar, FiGitBranch } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import logoMin from '../../assets/logo-min.svg';
import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

interface Issue {
  id: number;
  title: string;
  description: string;
  html_url: string;
  user: {
    login: string;
  }
}

const Repository: React.FC = () =>{
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {

    api.get<Repository>(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });

    api.get<Issue[]>(`repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    });

  }, [params.repository]);

  return (
    <>
      <Header>
        <img id="logo" src={logo} alt="Github Explorer"/>
        <img id="logoMin" src={logoMin} alt="Github Explorer"/>
        <Link to="/">
          <FiChevronLeft size={16}/>
          Voltar
        </Link>
      </Header>

      { repository && (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
            <div>
              <strong>rocketseat/unform</strong>
              <p>descrição do repositório</p>
            </div>
          </header>
          <ul>
            <li>
              <div>
                <FiStar size={24}/>
                <strong>{repository.stargazers_count}</strong>
              </div>
              <span>Stars</span>
            </li>

            <li>
              <div>
                <FiGitBranch size={24}/>
                <strong>{repository.forks_count}</strong>
              </div>
              <span>Forks</span>
            </li>

            <li>
              <div>
                <FiAlertCircle size={24}/>
                <strong>{repository.open_issues_count}</strong>
              </div>
              <span>Issues abertas</span>
            </li>

          </ul>
        </RepositoryInfo>
      )}

      <Issues>
      {issues.map(issue => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
      ))}
      </Issues>
    </>
  )

}

export default Repository;
