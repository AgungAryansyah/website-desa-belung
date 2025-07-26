import { getRecords, getRecord, getFileUrl } from '../client';
import { COLLECTIONS } from '../config';

/**
 * Get village structure/organization
 * @returns {Promise} - Promise resolving to village structure
 */
export async function getVillageStructure() {
  const result = await getRecords(COLLECTIONS.STRUCTURE, {
    sort: 'order, name'
  });

  const structureWithImages = result.items.map(item => ({
    ...item,
    imageUrl: item.image ? getFileUrl(item, item.image) : null,
  }));

  return {
    ...result,
    items: structureWithImages
  };
}

/**
 * Get team members information
 * @param {Object} options - Query options
 * @returns {Promise} - Promise resolving to team members
 */
export async function getTeamMembers(options = {}) {
  const queryOptions = {
    sort: 'position_order, name',
    ...options
  };

  const result = await getRecords(COLLECTIONS.TEAM_MEMBERS, queryOptions);
  
  // Add profile image URLs
  const membersWithImages = result.items.map(member => ({
    ...member,
    profileImageUrl: member.profile_image ? getFileUrl(member, member.profile_image) : null,
    thumbnailUrl: member.profile_image ? getFileUrl(member, member.profile_image, '150x150') : null,
  }));

  return {
    ...result,
    items: membersWithImages
  };
}

/**
 * Get specific team member by ID
 * @param {string} id - Team member ID
 * @returns {Promise} - Promise resolving to team member
 */
export async function getTeamMemberById(id) {
  const member = await getRecord(COLLECTIONS.TEAM_MEMBERS, id);
  
  return {
    ...member,
    profileImageUrl: member.profile_image ? getFileUrl(member, member.profile_image) : null,
  };
}
