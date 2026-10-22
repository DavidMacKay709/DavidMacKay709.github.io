import type { CollectionEntry } from 'astro:content';
import type { Props as CardProps } from '../components/Card.astro';

export function projectCard(project: CollectionEntry<'projects'>): CardProps {
  const { title, summary, org, period, cover } = project.data;
  return { href: `/projects/${project.id}/`, title, summary, meta: `${org} · ${period}`, cover };
}

export function expeditionCard(expedition: CollectionEntry<'expeditions'>): CardProps {
  const { title, summary, when, cover } = expedition.data;
  return { href: `/expeditions/${expedition.id}/`, title, summary, meta: when, cover };
}
