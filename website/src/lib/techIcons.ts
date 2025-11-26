import type { IconType } from 'react-icons';
import {
  SiPython,
  SiPostgresql,
  SiApachespark,
  SiApachekafka,
  SiApacheairflow,
  SiTerraform,
  SiSnowflake,
  SiDatabricks,
  SiDocker,
  SiGit,
  SiTableau,
  SiGithubactions,
} from 'react-icons/si';

export interface TechIconConfig {
  icon: IconType;
  color: string;
  name: string;
}

export const techIconMap: Record<string, TechIconConfig> = {
  // Programming Languages
  'Python': { icon: SiPython, color: '#3776AB', name: 'Python' },

  // Databases
  'SQL': { icon: SiPostgresql, color: '#4169E1', name: 'SQL' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1', name: 'PostgreSQL' },

  // Big Data & Processing
  'Spark': { icon: SiApachespark, color: '#E25A1C', name: 'Apache Spark' },
  'Apache Spark': { icon: SiApachespark, color: '#E25A1C', name: 'Apache Spark' },
  'Spark Streaming': { icon: SiApachespark, color: '#E25A1C', name: 'Spark Streaming' },
  'Kafka': { icon: SiApachekafka, color: '#231F20', name: 'Apache Kafka' },
  'Apache Kafka': { icon: SiApachekafka, color: '#231F20', name: 'Apache Kafka' },

  // Data Orchestration
  'Airflow': { icon: SiApacheairflow, color: '#017CEE', name: 'Apache Airflow' },
  'Apache Airflow': { icon: SiApacheairflow, color: '#017CEE', name: 'Apache Airflow' },

  // Data Warehouses
  'Snowflake': { icon: SiSnowflake, color: '#29B5E8', name: 'Snowflake' },
  'Databricks': { icon: SiDatabricks, color: '#FF3621', name: 'Databricks' },
  'Delta Lake': { icon: SiDatabricks, color: '#FF3621', name: 'Delta Lake' },

  // Infrastructure
  'Terraform': { icon: SiTerraform, color: '#7B42BC', name: 'Terraform' },
  'Docker': { icon: SiDocker, color: '#2496ED', name: 'Docker' },
  'Git': { icon: SiGit, color: '#F05032', name: 'Git' },

  // Business Intelligence
  'Tableau': { icon: SiTableau, color: '#E97627', name: 'Tableau' },
};

// Helper function to get tech icon config with fallback
export function getTechIcon(techName: string): TechIconConfig | null {
  return techIconMap[techName] || null;
}

// Helper function to get all available tech names
export function getAvailableTechs(): string[] {
  return Object.keys(techIconMap).sort();
}
